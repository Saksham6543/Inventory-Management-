import React, { useState } from 'react';
import './ItemGroupsManager.css';

const ItemGroupsManager = ({ items }) => {
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleGroup = (groupName) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const groups = items?.groups || {};

  return (
    <div className="item-groups-manager">
      <h1>Item Groups</h1>
      <ul>
        {Object.keys(groups).map((groupName, index) => (
          <li key={index}>
            <div className="group-name" onClick={() => toggleGroup(groupName)}>
              {groupName}
            </div>
            {expandedGroups[groupName] && (
              <ul className="group-items">
                {groups[groupName].length > 0 ? (
                  groups[groupName].map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.productName} - {item.productSKU} - {item.productPrice} - {item.description}
                    </li>
                  ))
                ) : (
                  <li>No items available</li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemGroupsManager;
