import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    if (typeof error === 'string') {
        // Handle string type
        const errorMessage: string = error;
        console.log(errorMessage);
    } else if (error instanceof Error) {
        // Handle Error type
        const errorObject: Error = error;
        console.log(errorObject);
    } else {
        // Handle unknown type
        console.log("Unknown error type");
    }

    const errorText = typeof error === 'string' ? error : (error instanceof Error ? error.message : "Unknown Error");

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorText}</i>
            </p>
        </div>
    );
}
