import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar  navbar-expand-lg ">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
        <a className="navbar-brand fs-1 p-4 " href="#">
          Mykola Kysil
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100 ">
            <li
              className="nav-item d-flex  
              "
            >
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About"
                    ? " p-4 text-decoration-none fw-bolder bg-light shadow bg-white rounded"
                    : " p-4  link-unstyled text-decoration-none fw-normal"
                }
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact"
                    ? " p-4  text-decoration-none fw-bolder bg-white rounded "
                    : " p-4 text-decoration-none fw-normal"
                }
              >
                Contact
              </a>
              <a
                href="#project"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Project"
                    ? " p-4 text-decoration-none fw-bolder bg-light shadow bg-white rounded"
                    : " p-4  link-unstyled text-decoration-none fw-normal"
                }
              >
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;

// function Nav(props) {
//   const { categories = [], setcurrentCategory, currentCategory } = props;
//   //   useEffect(() => {
//   //     document.title = capitalizeFirstLetter(currentCategory.name);
//   //   }, [currentCategory]);
//   return (
//     <nav className="navbar  navbar-expand-lg ">
//       <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
//         <a className="navbar-brand" href="#">
//           Mykola Kysil
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
//             <li
//               className="nav-item d-flex
//             "
//             >
//               {categories.map((category) => (
//                 <a
//                   className={`nav-link active            aria-current="page" href="#"
//               ${currentCategory.name === category.name}
//                 }`}
//                   key={category.name}
//                 >
//                   <span onClick={() => setcurrentCategory(category)}>
//                     {capitalizeFirstLetter(category.name)}
//                   </span>
//                 </a>
//               ))}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default Nav;
