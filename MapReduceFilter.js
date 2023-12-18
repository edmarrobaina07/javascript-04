const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim', foundedOn: 1938 },
    { name: 'Samsung1', marketValue: 177, CEO: 'Kim1', foundedOn: 1987 },
    { name: 'Samsung2', marketValue: 297, CEO: 'Kim2', foundedOn: 1955 },
    { name: 'Samsung3', marketValue: 87, CEO: 'Kim3', foundedOn: 1947 },
    { name: 'Samsung4', marketValue: 347, CEO: 'Kim4', foundedOn: 1997 },
    { name: 'Samsung5', marketValue: 207, CEO: 'Kim5', foundedOn: 2000 },
    { name: 'Samsung6', marketValue: 845, CEO: 'Kim6', foundedOn: 1976 },
]


// adicionar 10% de valor de mercado a todas as companhias - Map
// filtrar somente companhias fundadas abaixo de 1990 - filter
// somar o valor de mercado dos restantes - reduce

/*const marketValueOldCompanies = companies.map( (company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)

    return company
}).filter(company => company.foundedOn < 1990).reduce( (acc,company) =>
    acc + company.marketValue, 0)

console.log(marketValueOldCompanies) esse exemplo é com mais código o debaixo é menos código com o mesmo resultado*/

/*const add10Percent = (company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)

    return company
}

const filterCompanies = (company) => company.foundedOn < 1990

const calculateTotalMarketValue = (acc,company) => acc + company.marketValue

const marketValueOldCompanies = companies
.map(add10Percent)
.filter(filterCompanies)
.reduce(calculateTotalMarketValue, 0)

console.log(marketValueOldCompanies)*/

// subtrair 10% de valor
// filtrar companhias depois de 1980
// somar o valor de mercado das restantes

const menos10 = (empresa) => {
    empresa.marketValue = empresa.marketValue - (empresa.marketValue / 10)
    return empresa
}

const valorDasEmpresas = companies
.map(menos10)


console.log(valorDasEmpresas)