import React, { useEffect, useState } from 'react'
import { sidebarData } from '../../sidebarData'
import Product from '../product/Product'
import SidebarOption from '../sidebarOption/SidebarOption'
import "./home.css"

const Home = () => {
    const [selectedArr, setSelectedArr] = useState([])

    const addSelected = (newItem) => {
        if (!selectedArr.includes(newItem)) {
            setSelectedArr([...selectedArr, newItem]);
        }
    }

    const deleteSelected = (deleteItem) => {
        console.log("deleted")
        const updatedSelectedArr = selectedArr.filter(item => item !== deleteItem)
        setSelectedArr(updatedSelectedArr);
    }

    useEffect(() => {

    }, [selectedArr])

    return (
        <div className='homeContainer'>
            <div className="topContent">
                <h2 className="breadcrums">Medical Darpan / Search / <span className='current'>FabiFlu Tablet</span></h2>
                <div className="search">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" placeholder="Paracetamol" />
                    <button>Search</button>
                </div>

                <div className="titleDiv">
                    <h2 className="title">Paracetamol <span className='resultCount'>(128 products)</span></h2>
                    <div className="tags">
                        {selectedArr.map(item => (
                            <div className="tag">
                                {item.title} <span className="material-symbols-outlined" onClick={() => deleteSelected(item)}>close</span>
                            </div>
                        ))}
                        {selectedArr.length > 0 && <button onClick={() => setSelectedArr([])}>Remove All</button>}
                    </div>
                </div>
            </div>

            <div className="bottomContent">
                <div className="left">
                    {sidebarData.map(singleItemData => <SidebarOption key={singleItemData.id} singleItemData={singleItemData} addSelected={addSelected} deleteSelected={deleteSelected} selectedArr={selectedArr} />)}
                </div>
                <div className="right">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home