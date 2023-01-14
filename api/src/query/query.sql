SELECT
    business_2.name AS business,
    business_2.coordinates AS coords,
    category.name as category,
    discount_list.price AS price
FROM discount_week AS dw
    INNER JOIN business_2
    ON business_2.business_id = dw.business_id
    INNER JOIN discount_list
    ON discount_list.discount_id = dw.discount_tuesday
    INNER JOIN category
    ON discount_list.category_id = category.category_id