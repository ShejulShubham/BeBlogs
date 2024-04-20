function blogpage({id,title,category,date}){
    return(
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{date}</td>
        </tr>
    )
}
export default blogpage