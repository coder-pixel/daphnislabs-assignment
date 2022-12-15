import React, { useState } from 'react'
import "./sidebarOption.css"


const SidebarOption = ({ singleItemData, addSelected, deleteSelected, selectedArr }) => {
    // console.log(singleItemData.title)


    return (
        <div className='sidebarOption'>
            <h2 className="sidebaOptionTitle">{singleItemData.title}</h2>
            <div className="sidebarOptionList">
                {singleItemData.data.map(item => {
                    {/* console.log(selectedArr.includes(item)); */ }
                    return (
                        <div className={`sidebarOptionListItem ${selectedArr.includes(item) ? "selected" : ""}`} key={item.id} onClick={() => addSelected(item)}>
                            {item.title} <span className={`material-symbols-outlined ${selectedArr.includes(item) ? "" : "hidden"}`} onClick={() => deleteSelected(item)}>close</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SidebarOption