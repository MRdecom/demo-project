import React from 'react'

type TabMenuProps = {
    className?: string,
    tabList: Array<string>,
    activeTabIndex: number,
    onClick: (index:number)=>void
}

const TabMenu = ({ className = '', tabList, onClick, activeTabIndex = 0 }:TabMenuProps) => {
  return <div className={`tab-list-component ${className}`}>
        {tabList.map((tabItem, i) => {
          return <div key={tabItem} onClick={() => { onClick(i) }} className={`tab-item ${activeTabIndex === i ? 'active' : ''}`}>{tabItem}</div>
        })}
    </div>
}

export default TabMenu
