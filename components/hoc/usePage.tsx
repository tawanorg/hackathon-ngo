import { useContext } from "react";
import PageContext, { DEFAULT } from "./pageContext";
 
const usePage = (pageOptions: typeof DEFAULT) => {
  const { page } = useContext(PageContext);
  if (!page) throw new Error('Context provider missing')
  return page
}

export default usePage