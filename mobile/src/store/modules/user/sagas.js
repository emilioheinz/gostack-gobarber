import { Alert } from 'react-native'
import { takeLatest, call, put, all } from 'redux-saga/effects'

import { updateProfileSuccess, updateProfileFailure } from './actions'

import api from '~/services/api'

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    )

    const response = yield call(api.put, 'users', profile)

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso.')

    yield put(updateProfileSuccess(response.data))
  } catch (err) {
    Alert.alert('Opsss!', 'Erro ao atualizar perfil, verifique seus dados.')
    yield put(updateProfileFailure())
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)])