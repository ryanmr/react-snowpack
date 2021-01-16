import React, { useState } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { hydrate, dehydrate } from "react-query/hydration";
import { tw } from "twind";
import { queryClient } from "./queryClient";
import { v4 as uuid } from "uuid";
import delay from "delay";

async function addTodo(variables) {
  delay(2000);

  console.log("adding todo", variables);

  return { id: uuid(), title: variables.title };
}

// Define the "addTodo" mutation
queryClient.setMutationDefaults("addTodo", {
  mutationFn: addTodo,
  onMutate: async (variables) => {
    // Cancel current queries for the todos list
    await queryClient.cancelQueries("todos");

    // Create optimistic todo
    const optimisticTodo = { id: uuid(), title: variables.title };

    // Add optimistic todo to todos list
    queryClient.setQueryData("todos", (old = []) => [...old, optimisticTodo]);

    // Return context with the optimistic todo
    return { optimisticTodo };
  },
  onSuccess: (result, variables, context) => {
    // Replace optimistic todo in the todos list with the result
    queryClient.setQueryData("todos", (old = []) =>
      old.map((todo) => (todo.id === context.optimisticTodo.id ? result : todo))
    );
  },
  onError: (error, variables, context) => {
    // Remove optimistic todo from the todos list
    queryClient.setQueryData("todos", (old = []) =>
      old.filter((todo) => todo.id !== context.optimisticTodo.id)
    );
  },
  retry: 3,
});

// Not sure what to do with this portion yet

// // If the mutation has been paused because the device is for example offline,
// // Then the paused mutation can be dehydrated when the application quits:
// const state = dehydrate(queryClient);

// // The mutation can then be hydrated again when the application is started:
// hydrate(queryClient, state);

// // Resume the paused mutations:
// queryClient.resumePausedMutations();

export function Page4() {
  const client = useQueryClient();

  const [title, setTitle] = useState("");

  const { mutate, status, reset } = useMutation("addTodo");

  const doSomething = React.useCallback(
    async (event) => {
      event.preventDefault();
      if (!title) {
        return;
      }
      reset();
      await delay(1000);
      mutate({ title });
      setTitle("");
    },
    [title]
  );

  const todos = client.getQueryData("todos");

  return (
    <div
      className={tw`h-screen bg-green-400 flex items-start justify-center py-4 px-4 space-x-2`}
    >
      <div className={tw`w-1/2`}>
        <form onSubmit={doSomething}>
          <label className={tw`flex flex-col`}>
            <span className={tw`block font-bold`}>title</span>
            <input
              className={tw`p-2`}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </label>
          <button
            type="submit"
            className={tw`my-2 block p-4 bg-blue-200 hover:bg-blue-300`}
          >
            use mut
          </button>
          {status === "loading" && <p>(loading)</p>}
          {status === "success" && <p>all done</p>}
        </form>
      </div>
      <div className={tw`w-1/2 bg-gray-900 bg-opacity-20`}>
        {todos ? (
          todos.map((todo) => <div key={todo.title}>{todo.title}</div>)
        ) : (
          <p>no todos yet</p>
        )}
      </div>
    </div>
  );
}
