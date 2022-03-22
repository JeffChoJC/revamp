json.review do
    json.partial! "api/reviews/review", review: @review
end

json.company do
    json.partial! "api/companies/company", company: Company.find_by(id: @review.company_id)
    json.rating Company.find_by(id: @review.company_id).overall_rating
    json.food_rating Company.find_by(id: @review.company_id).food_rating
    json.service_rating Company.find_by(id: @review.company_id).service_rating
    json.ambience_rating Company.find_by(id: @review.company_id).ambience_rating
    json.value_rating Company.find_by(id: @review.company_id).value_rating
    json.noise_level Company.find_by(id: @review.company_id).noise_level
end