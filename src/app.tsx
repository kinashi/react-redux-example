import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'

const BooksPage = lazy(() => import ('~/components/pages/Books'))

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Provider store={store}>
      <BooksPage />
    </Provider>
  </Suspense>
)

render(
  <App />,
  document.getElementById('app')
)
