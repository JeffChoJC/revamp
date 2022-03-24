json.companies do
    @companies.each do |company|
        json.set! company.name do
            json.partial! 'api/companies/company', company: company
            json.openings company.open_slots(@date)
        end
    end
end