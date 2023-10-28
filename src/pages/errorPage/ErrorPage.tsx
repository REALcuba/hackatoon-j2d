import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    const errorText = error ? (error instanceof Error ? error.message : String(error)) : "Unknown Error"

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorText}</i>
            </p>
        </div>
    )
}

export default ErrorPage
