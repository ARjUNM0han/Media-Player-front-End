import { base_url } from './base_url'
import commonApi from './commonApi'

export const addVideo = async (data) => {
    return await commonApi('POST', `${base_url}/allVideos`, data);
}

export const getVideo = async () => {
    return await commonApi('GET', `${base_url}/allVideos`, '')
}
export const deleteVideo = async (id) => {
    return await commonApi('DELETE', `${base_url}/allVideos/${id}`, {})
}

// category

export const addCategory = async (data) => {
    return await commonApi('POST', `${base_url}/category`, data);
}

export const getCategories = async () => {
    return await commonApi('GET', `${base_url}/category`, '')
}
export const deleteCategory = async (id) => {
    return await commonApi('DELETE', `${base_url}/category/${id}`, {})
}

export const getSpecificCategrory = async (id) => {
    return await commonApi('GET', `${base_url}/category/${id}`, '')
}

export const updateCategoryVideos = async (id, data) => {
    return await commonApi('PUT', `${base_url}/category/${id}`, data)
}

// history

export const addHistory = async (data) => {
    return await commonApi('POST', `${base_url}/history`, data);
}

export const getHistory = async () => {
    return await commonApi('GET', `${base_url}/history`, '')
}
export const deleteHistory = async (id) => {
    return await commonApi('DELETE', `${base_url}/history/${id}`, {})
}
