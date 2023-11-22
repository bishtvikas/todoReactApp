import InputBox from './component/InputBox'
import Items from './component/Items'
import Title from './component/Title'
import NoTask from './component/NoTask'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import './index.css'

function App() {
  let [listData, setListData] = useState([])

  const onClickHandler = (todoName, todoDue) => {
    setListData([...listData, { Name: todoName, Due: todoDue }])
  }

  const onRemoveHandler = (e, item) => {
    let startIndex = listData.indexOf(item)
    let res = listData.splice(startIndex, 1) //startIndex , NumberOfDeletingElement
    console.log(res)
    console.log(listData)
    setListData([...listData])
  }

  return (
    <>
      <main className="container">
        <Title></Title>
        <InputBox onClickHandler={onClickHandler}></InputBox>
        <Items listData={listData} onRemoveHandler={onRemoveHandler}></Items>
        {listData.length === 0 && <NoTask />}
      </main>
    </>
  )
}
export default App
