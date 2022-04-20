# MarkdownPreviewer

My simple React Markdown Previewer maked using marked.js

const cat = ['profit', 'other profit', 'costs', 'other costs']

const data = [
  {name : 'Зарплата', category : 'costs', value : '101', timestamp : 1645898400000, id : '11'},
  {name : 'Аренда', category : 'costs', value : '200', timestamp : 1645898400000, id : '12'},
  {name : 'Какая-то трата', category : 'costs', value : '300', timestamp : 1645898400000, id : '13'},
  {name : 'Какой-то доход', category : 'other profit', value : '400', timestamp : 1645898400000, id : '14'},
  {name : 'Еще какой то доход', category : 'other profit', value : '300', timestamp : 1645898400000, id : '15'},
  {name : 'Зарплата', category : 'costs', value : '200', timestamp : 1645898400000, id : '16'},
  {name : 'Какая-то трата', category : 'costs', value : '200', timestamp : 1645898400000, id : '17'},
  {name : 'Аренда', category : 'costs', value : '400', timestamp : 1645898400000, id : '18'},
  {name : 'Еще какой то доход', category : 'other profit', value : '300', timestamp : 1645898400000, id : ''},
  {name : 'Сопровождение', category : 'profit', value : '500', timestamp : 1645898400000, id : '19'},
  {name : 'Оплата долга', category : 'profit', value : '200', timestamp : 1645898400000, id : '20'},
  {name : 'Незначительная трата', category : 'other costs', value : '200', timestamp : 1645898400000, id : '21'},
  {name : 'Совсем незначительнаая трата', category : 'other costs', value : '100', timestamp : 1645898400000, id : '22'},
  {name : 'Ну очень незначительная трата', category : 'other costs', value : '100', timestamp : 1645898400000, id : '23'},
  {name : 'Печеньки', category : 'other costs', value : '100', timestamp : 1645898400000, id : '24'},
  {name : 'Зарплата', category : 'costs', value : '200', timestamp : 1648576800000, id : '25'},
  {name : 'Сопровождение', category : 'profit', value : '300', timestamp : 1648576800000, id : '26'},
  {name : 'Еще какой то доход', category : 'other profit', value : '200', timestamp : 1648576800000, id : '27'},
  {name : 'Оплата долга', category : 'profit', value : '400', timestamp : 1648576800000, id : '28'},
  {name : 'Аренда', category : 'costs', value : '300', timestamp : 1648576800000, id : '29'},
  {name : 'Печеньки', category : 'other costs', value : '200', timestamp : 1648576800000, id : '30'},
  {name : 'Зарплата', category : 'costs', value : '402', timestamp : 1648576800000, id : '31'},
  {name : 'Аренда', category : 'costs', value : '200', timestamp : 1648576800000, id : '32'},
  {name : 'Какая-то трата', category : 'costs', value : '100', timestamp : 1648576800000, id : '33'},
  {name : 'Какой-то доход', category : 'other profit', value : '200', timestamp : 1648576800000, id : '34'},
  {name : 'Еще какой то доход', category : 'other profit', value : '300', timestamp : 1648576800000, id : '35'},
  {name : 'Зарплата', category : 'costs', value : '400', timestamp : 1650416586274, id : '36'},
  {name : 'Какая-то трата', category : 'costs', value : '100', timestamp : 1650416586274, id : '37'},
  {name : 'Аренда', category : 'costs', value : '200', timestamp : 1650416586274, id : '38'},
  {name : 'Еще какой то доход', category : 'other profit', value : '300', timestamp : 1650416586274, id : '39'},
  {name : 'Сопровождение', category : 'profit', value : '300', timestamp : 1650416586274, id : '40'},
  {name : 'Оплата долга', category : 'profit', value : '500', timestamp : 1650416586274, id : '41'},
  {name : 'Незначительная трата', category : 'other costs', value : '200', timestamp : 1650416586274, id : '42'},
  {name : 'Совсем незначительнаая трата', category : 'other costs', value : '100', timestamp : 1650416586274, id : '43'},
  {name : 'Ну очень незначительная трата', category : 'other costs', value : '100', timestamp : 1650416586274, id : '44'},
  {name : 'Печеньки', category : 'other costs', value : '200', timestamp : 1650416586274, id : '45'},
  {name : 'Зарплата', category : 'costs', value : '303', timestamp : 1650416586274, id : '46'},
  {name : 'Сопровождение', category : 'profit', value : '200', timestamp : 1650416586274, id : '47'},
  {name : 'Еще какой то доход', category : 'other profit', value : '300', timestamp : 1650416586274, id : '48'},
  {name : 'Оплата долга', category : 'profit', value : '400', timestamp : 1650416586274, id : '49'},
  {name : 'Аренда', category : 'costs', value : '300', timestamp : 1650416586274, id : '51'},
  {name : 'Сюрприз', category : 'costs', value : '300', timestamp : 1650416586274, id : '5'}
]

const getCategoriesData = (data) => {
  const result = {};
  let names  = data.map((item) => item.name);
  names = Array.from(new Set(names));
  for (let name of names) {
    result[name] = data.find((item) => item.name === name).category;
  }
  return result
}

const categories = getCategoriesData( data );

const sortData = (data) => {
  const months = [[new Date(new Date().getFullYear(), new Date().getMonth() - 2), new Date(new Date().getFullYear(), new Date().getMonth() - 1, -1)],
  [new Date(new Date().getFullYear(), new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1)],
  [new Date(new Date().getFullYear(), new Date().getMonth()), new Date()]];
  let names  = data.map((item) => item.name);
  names = Array.from(new Set(names));
  const result = [];
  for (let i = 0; i < months.length; i++) {
    const row = [];
    for (let name of names) {
      const sortData = data.filter(
        (item) => item.name === name && item.timestamp <= Number(months[i][1]) && item.timestamp >= Number(months[i][0]) 
        );
        const value = sortData.reduce((acc,curr) => acc + Number(curr.value), 0);
        const timestamp = sortData.length ? sortData[0].timestamp : Number(months[i][0]);
        row.push({name : name, value : value, category : categories[name], timestamp : timestamp})
    }
    result.push(row);
  }
  return result
}

const tableRow = ({rowData}) => {

}

const ExtendableRow = ({rowData}) => {
  const [isOpened, setIsOpened] = useState(false);
  const onClick = () => {setIsOpened((flag) => !flag)}
  return (
    <div style={{'display' : 'flex'}} onClick={onClick}> 
      <span><b>{rowData[0][0].category}</b></span>
      {
      rowData.map((item, inx) => (<span style={{'border' : '1px solid black'}}>{item.reduce((acc, elem) => acc + Number(elem.value), 0)}</span>))
    }</div>
  )
}

export default function App() {
  const [ tableData, setTableData ] = useState([]);
  useEffect(() => {
    const sortedData = sortData(data);
    setTableData(sortData);
    console.dir(sortData(data));
  }, []);

  const createRowData = () => {
    const result = [];
    for (let category of cat) {
      const catData = [];
      for (let i = 0; i < tableData.length; i++) {
        catData.push(tableData[i].filter((item) => item.category === category))
      }
      result.push(catData);
    }
    console.log(result);
    return result.map((elem) => (
      <ExtendableRow rowData={elem} key={`${elem[0][0].name}-${elem[0][0].category}`} />
    ))
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
  <h2>{createRowData()}</h2>
    </div>
  );
}
