/**
 * Cliente API centralizado para hacer peticiones al backend
 */

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public details?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

interface FetchOptions extends RequestInit {
  timeout?: number
}

export async function apiClient<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { timeout = 10000, ...fetchOptions } = options

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(endpoint, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Error desconocido' }))
      throw new ApiError(
        error.error || `HTTP ${response.status}`,
        response.status,
        error.details
      )
    }

    return await response.json()
  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof ApiError) {
      throw error
    }

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new ApiError('La solicitud tardó demasiado tiempo', 408)
      }
      throw new ApiError(error.message, 500)
    }

    throw new ApiError('Error desconocido', 500)
  }
}

// Métodos de conveniencia
export const api = {
  get: <T = any>(url: string, options?: FetchOptions) =>
    apiClient<T>(url, { ...options, method: 'GET' }),

  post: <T = any>(url: string, data?: any, options?: FetchOptions) =>
    apiClient<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  put: <T = any>(url: string, data?: any, options?: FetchOptions) =>
    apiClient<T>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: <T = any>(url: string, options?: FetchOptions) =>
    apiClient<T>(url, { ...options, method: 'DELETE' }),
}


