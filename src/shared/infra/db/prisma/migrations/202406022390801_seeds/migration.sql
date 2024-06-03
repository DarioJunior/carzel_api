INSERT INTO
    `vehicle_brands` (`id`, `name`)
VALUES (2, 'Toyota'),
    (3, 'Honda'),
    (4, 'Chevrolet'),
    (5, 'Nissan');

INSERT INTO
    `vehicles` (
        `id`,
        `brand_id`,
        `model`,
        `description`,
        `value`,
        `mileage`,
        `year`,
        `is_manual_gear`,
        `is_sold`
    )
VALUES (
        1,
        2,
        'Corolla',
        'Toyota Corolla 2020',
        20000.00,
        1000.0,
        2020,
        false,
        false
    ),
    (
        2,
        2,
        'Camry',
        'Toyota Camry 2021',
        30000.00,
        2000.0,
        2021,
        false,
        false
    ),
    (
        3,
        3,
        'Civic',
        'Honda Civic 2022',
        25000.00,
        3000.0,
        2022,
        false,
        true
    ),
    (
        4,
        3,
        'Accord',
        'Honda Accord 2023',
        35000.00,
        4000.0,
        2023,
        false,
        true
    ),
    (
        5,
        1,
        'Mustang',
        'Ford Mustang 2024',
        40000.00,
        5000.0,
        2024,
        true,
        false
    );

INSERT INTO
    `optional_arrangements` (`id`, `name`)
VALUES (1, 'Air Conditioning'),
    (2, 'Power Steering'),
    (3, 'Power Windows'),
    (4, 'Leather Seats'),
    (5, 'Sunroof');

INSERT INTO
    `vehicle_optional_arrangements` (
        `vehicle_id`,
        `optional_arrangement_id`
    )
VALUES (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5);