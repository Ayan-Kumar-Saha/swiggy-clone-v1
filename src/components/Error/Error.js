import { useRouteError } from "react-router";

const Error = () => {
    let error = useRouteError();
    return <h1>Error - 404 not found - {error.statusText}</h1>
}

export default Error;