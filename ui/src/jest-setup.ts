import '@testing-library/jest-dom'

jest.mock('@/config', () => ({
  API_URL: 'http://localhost:8080',
  SITE_URL: 'http://localhost:5173',
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
