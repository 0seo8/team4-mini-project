import React, { createContext, useState } from 'react'
import { useLocation } from 'react-router'
import Button from '../../common/Button'
import UserDetailForm from '../UserDetailForm'
import * as S from './style'

const initialAddInfo = {
  gender: null,
  age: null,
  job: null,
  income: null,
  hobby: null,
  house: null,
}
export const AddFormContext = createContext({
  addInfo: initialAddInfo,
  setAddInfo: () => {},
})

function Additional() {
  const { state: formData } = useLocation()
  const [addInfo, setAddInfo] = useState(initialAddInfo)
  // const [userInfo, setUserInfo] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(addInfo)
    const userInfo = { ...formData, ...addInfo }
    // console.log({ ...formData, ...addInfo })
    // setUserInfo(...formData, ...addInfo)
    console.log(userInfo)
  }

  return (
    <AddFormContext.Provider value={{ addInfo, setAddInfo }}>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>
            username을 위한 <br /> 서비스를 위해 입력해주세요!
          </S.Title>
          <UserDetailForm />
          <Button width="100%" height="5.2rem">
            회원가입 완료
          </Button>
        </S.Form>
      </S.Container>
    </AddFormContext.Provider>
  )
}

export default Additional
