/** Generate by swagger-axios-codegen */
// @ts-nocheck

/* eslint-disable */

/** Generate by swagger-axios-codegen */

/* eslint-disable */
// @ts-nocheck
import {AxiosInstance, AxiosRequestConfig} from 'axios'

export interface IRequestOptions extends AxiosRequestConfig {
  /** only in axios interceptor config*/
  loading?: boolean
  showError?: boolean
}

export interface IRequestConfig {
  method?: any
  headers?: any
  url?: any
  data?: any
  params?: any
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance
  /** only in axios interceptor config*/
  loading: boolean
  showError: boolean
}

// Add default options
export const serviceOptions: ServiceOptions = {}

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  } else {
    throw new Error('please inject yourself instance like axios  ')
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = {
    loading: serviceOptions.loading,
    showError: serviceOptions.showError,
    ...options,
    method,
    url,
  }
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType,
  }
  return configs
}

export const basePath = ''

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[]
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[]
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number
  items?: T[]
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number
  items?: T[]
}

// customer definition
// empty

export class LoginClient {
  /**
   * User login
   */
  login(params: {
    /** requestBody */
    body?: any
  } = {} as any, options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/login'

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      configs.data = params.body

      axios(configs, resolve, reject)
    })
  }
}

export class ProductsClient {
  /**
   *
   */
  getProducts(options: IRequestOptions = {}): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products'

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Get a product by ID
   */
  getProductById(
    params: {
      /** ID of the product */
      id: number
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Product> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}'
      url = url.replace('{id}', params['id'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update a product by ID
   */
  updateProductById(
    params: {
      /** ID of the product */
      id: number
      /** requestBody */
      body?: Product
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Product> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}'
      url = url.replace('{id}', params['id'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params.body

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete a product by ID
   */
  deleteProductById(
    params: {
      /** ID of the product */
      id: number
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}'
      url = url.replace('{id}', params['id'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
}

export class RegistrationClient {
  /**
   * Create a new user account
   */
  registerUser(
    params: {
      /** requestBody */
      body?: Registration
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/register'

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params.body

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
}

export class UsersClient {
  /**
   * Get all users
   */
  getAllUsers(options: IRequestOptions = {}): Promise<Users[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users'

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Get a user by ID
   */
  getUserById(
    params: {
      /** ID of the user */
      id: number
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Users> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}'
      url = url.replace('{id}', params['id'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update a user by ID
   */
  updateUserById(
    params: {
      /** ID of the user */
      id: number
      /** requestBody */
      body?: Users
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Users> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}'
      url = url.replace('{id}', params['id'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params.body

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete a user by ID
   */
  deleteUserById(
    params: {
      /** ID of the user */
      id: number
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}'
      url = url.replace('{id}', params['id'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
}

export interface Error {
  /** Something went wrong please check server logging */
  error: string
}

export interface Product {
  /** Product ID */
  id?: number

  /** Product name */
  name: string

  /** Product model */
  model: EnumProductModel

  /** Product description */
  description: string

  /** Product stocklevel */
  stocklevel: number

  /** Product price */
  price: number
}

export interface Registration {
  /**  */
  username: string

  /**  */
  password: string

  /**  */
  email: string

  /**  */
  role: EnumRegistrationRole
}

export interface Users {
  /** User ID */
  id?: number

  /** Username */
  username: string

  /** User password */
  password: string

  /** User email address */
  email: string
}
export enum EnumProductModel {
  'desktop' = 'desktop',
  'laptop' = 'laptop',
  'monitor' = 'monitor',
}
export enum EnumRegistrationRole {
  'customer' = 'customer',
  'employee' = 'employee',
}
