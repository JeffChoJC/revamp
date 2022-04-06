json.review do
    json.partial! "api/reviews/review", review: @review
end

json.company do
    json.partial! "api/companies/company", company: Company.find_by(id: @review.company_id)
    json.rating Company.find_by(id: @review.company_id).overall_rating
    json.service_rating Company.find_by(id: @review.company_id).service_rating
    json.value_rating Company.find_by(id: @review.company_id).value_rating
    json.efficiency_rating Company.find_by(id: @review.company_id).efficiency_rating
end