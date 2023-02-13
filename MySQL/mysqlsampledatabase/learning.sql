select * from customers;
select * from employees;
-- insert value
insert employees(employeeNumber,lastName,firstName,extension,email,officeCode,reportsTo,jobTitle)  
value (8899,"Nguyen","Lam","x2741","lamnguyendnvncn@gmail.com",3,1102,"Software Engineer");
-- update value
select * from employees where firstName = "Lam";
update employees set lastName = 'Nguyen' where employeeNumber = 8899;
-- left join: must contains all data in the left table (before the left join keyword)
select * from employees as e left join offices as o
on e.officeCode = o.officeCode;
-- inner join: where data is found on both side and not null
select e.employeeNumber,e.lastName,e.firstName,e.reportsTo,x.lastName,x.firstName,x.jobTitle
 from employees as e left join employees as x
 on e.reportsTo = x.employeeNumber;

delete from employees where employeeNumber = 8899;
select * from employees;

-- select employees that have lastName and firstName contain letter a
select * from employees
where lastName like "%a%" or firstName like "%a%";

-- Aggregate Functions: avg(), sum(), min(), max(), count()
-- Links: https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
select count(a.employeeNumber) as count_report, b.jobTitle, b.firstName, b.lastName
from employees as a inner join employees as b
on a.reportsTo = b.employeeNumber
group by b.jobTitle;
