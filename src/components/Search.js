import React from "react";

function Search({setSearchPoke}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => setSearchPoke(e.target.value)} placeholder="search term" className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;






























// import React from "react";

// function Search(props) {
//   return (
//     <div className="ui search">
//       <div className="ui icon input">
//         <input onChange = {(e) => props.setSearchPoke(e.target.value)} placeholder="search term" className="prompt" /> {/*Call setSearch function as onChange. See lecture 4 search.js line 8.*/}
//         <i className="search icon" />
//       </div>
//     </div>
//   );
// }

// export default Search;
