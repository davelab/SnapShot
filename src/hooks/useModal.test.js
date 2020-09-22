import { renderHook, act } from '@testing-library/react-hooks'
import useModal from './useModal'

test('should change state to open modal', () => {
  const { result } = renderHook(() => useModal())

  act(() => {
    result.current.toggle()
  })

  expect(result.current.isShowing).toBe(true)
})