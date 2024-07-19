import React, { useEffect, useState } from 'react'
import { getCategories, deleteCategory, getSpecificCategrory, updateCategoryVideos } from '../../../Services/allApi';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import VideoCard from '../VideoList/VideoCard';


function CategoryList({ addRes }) {

    const [categories, setCategories] = useState([])

    const getAllCategories = async () => {
        const res = await getCategories();
        setCategories(res.data)
    }

    const deleteCat = async (id) => {
        const rep = await deleteCategory(id)
        if (rep.status === 200) {
            getAllCategories()
            toast.success('category deleted successfully')
        } else {
            toast.info('something went wrong')
            console.log(rep)
        }
    }


    useEffect(() => {
        getAllCategories()
    }, [addRes])

    const handleDragOver = (e) => {
        e.preventDefault();
        console.log('----dragging over-----')
    }


    const handleDrop = async (e, categoryID) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('videoData'))
        console.log('----------dropping-------', data)
        const catRes = await getSpecificCategrory(categoryID)
        const category = catRes.data
        category.catVideos.push(data)
        const updateCatRes = await updateCategoryVideos(categoryID, category)
        console.log(updateCatRes, '-------------updated category---------')
        if (updateCatRes.status === 200) {
            toast.success('video added to category')
            getAllCategories()
        } else {
            toast.warning('somenthing went wrong')
        }
    }
    return (
        <>
            <div className='border border-white p-1 rounded'>
                {categories.length > 0 ?
                    <div>
                        {categories.map((i) => (
                            <div className=' mt-3 border border-white p-3 m-1 shadow rounded  ' onDragOver={(e) => { handleDragOver(e) }} onDrop={(e) => { handleDrop(e, i.id) }} key={i.catID}>
                                <div className='d-flex justify-content-between'>
                                    <h4>{i.catName}</h4>
                                    <Button variant="danger" className='' onClick={() => { deleteCat(i.id) }} >🗑️</Button>
                                </div>
                                {i.catVideos.length > 0 &&
                                    <div className=''>
                                        {
                                            i.catVideos.map((vid) => (
                                                <VideoCard video={vid} char={true}/>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    :
                    <h4> Nothing Found</h4>
                }
            </div>

        </>
    )
}

export default CategoryList