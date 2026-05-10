import { useRouteError } from "react-router"
import "../posts/style/feed.scss"

function RouteError() {
  const error = useRouteError()
  console.error(error)

  return (
    <main className="feed">
      <div className="left" />
      <div className="right">
        <div className="posts">
          <h1>Something went wrong.</h1>
          <p>{error?.message ?? "An unexpected error occurred."}</p>
          <button onClick={() => window.location.reload()}>Reload page</button>
        </div>
      </div>
    </main>
  )
}

export default RouteError
