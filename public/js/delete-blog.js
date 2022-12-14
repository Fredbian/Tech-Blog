const deleteBlog = async (e) => {
    e.preventDefault()

    const blog_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const response = await fetch(`/api/blogs/${blog_id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#delete-btn').addEventListener('click', deleteBlog)