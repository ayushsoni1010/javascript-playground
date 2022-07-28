import { useEffect, useState } from "react";

export enum EnvVariable {
  environment,
  serverEndPoint,
  website,
}

type EnvVariables = { [key in keyof typeof EnvVariable]: string };

const DefaultVariables: EnvVariables = {
  environment: "local",
  serverEndPoint: "http://localhost:5000",
  website: "http://localhost:3000",
};

export function useEnvKey(key: EnvVariable, defaultValue: string) {
  const enviormentVaribles = useEnv();
  let variable = enviormentVaribles[key];
  if (variable === "") variable = defaultValue;
  return variable;
}

export function useEnv() {
  const [variables, setVariables] = useState(DefaultVariables);

  const getVariables = () => {
    let variables: EnvVariables = DefaultVariables;
    for (let enviormentVariable in EnvVariable) {
      let value = process.env["REACT_APP_" + enviormentVariable];
      if (value === undefined) value = "";

      variables[enviormentVariable] = value;
    }

    setVariables(variables);
  };

  useEffect(() => {
    getVariables();
  }, []);

  return variables;
}
