export const fetchCompany = id => {
    return $.ajax({
        method: "GET",
        url: `api/companies/${id}`
    })
}

export const searchCompanies = keyword => {
    return $.ajax({
        method: "GET",
        url: "/api/companies",
        data: keyword
    })
}