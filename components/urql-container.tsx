import React, { ReactNode, useMemo } from "react";
import { Client, createClient, Provider } from "urql";

let urqlClient: Client;
type UrqlContainerProps = {
  children: ReactNode;
};

export function UrqlContainer({ children }: UrqlContainerProps) {
  const token = null;
  urqlClient = useMemo(() => {
    return createClient({
      url: "https://t4sg-s22-deliverable.herokuapp.com/v1/graphql",
      fetchOptions: () => {
        return {
          headers: {
            "x-hasura-admin-secret": "t4sgdabest",
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
    });
  }, [token]);
  return urqlClient ? <Provider value={urqlClient}>{children}</Provider> : null;
}
