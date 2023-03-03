import React from "react";
import Card from './Card';

function SearchList({ filteredItems }){
const filtered = filteredItems.map(item => <Card key={item.id} item={item} />);
return (
    <div>
        {filtered}
    </div>
);

}

export default SearchList;
