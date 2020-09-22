import { renderHook, act } from '@testing-library/react-hooks'
import useCoordinates from './useCoordinates'

test('should change coordinates', () => {
  const { result } = renderHook(() => useCoordinates())

  act(() => {
    result.current.setCoordinates({lat: 10, lng: 20})
  })

  expect(result.current.lat).toBe(10);
  expect(result.current.lng).toBe(20);
})