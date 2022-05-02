import React from 'react';


export const DEFAULT = {
  title: 'Untitled',
  subtitle: ''
}

const pageContext = {
  page: DEFAULT,
  setPage: (props: typeof DEFAULT) => {}
}

const PageContext = React.createContext(pageContext)

export default PageContext;