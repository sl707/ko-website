import React from 'react'
import s from 'styled-components'

import Layout from '../components/layout'
import { DownloadLink, Text, TextSubheading, TextWrapperOne } from '../data/typography'

const NameOrderWrapper = s.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const NameTable = s.table`
  border: 2px solid;
  margin: 10px;
  border-collapse: collapse;
`

const NameRow = s.tr`
  border: 1px solid;
  border-collapse: collapse;
`

const NameCell = s.td`
  border: 1px solid;
  border-collapse: collapse;
`

const mainNameOrder = [
  {
    age: '28세',
    name: '鎭(진)'
  },
  {
    age: '29세',
    name: '濟(제)'
  },
  {
    age: '30세',
    name: '柱(주)'
  },
  {
    age: '31세',
    name: '光(광)'
  },
  {
    age: '32세',
    name: '在(재)'
  },
  {
    age: '33세',
    name: '鍾(종)'
  },
  {
    age: '34세',
    name: '潤(윤)'
  },
  {
    age: '35세',
    name: '秉(병)'
  },
  {
    age: '36세',
    name: '烈(열)'
  },
  {
    age: '37세',
    name: '基(기)'
  },
  {
    age: '38세',
    name: '鉉(현)'
  },
  {
    age: '39세',
    name: '漢(한)'
  },
  {
    age: '40세',
    name: '根(근)'
  },
  {
    age: '41세',
    name: '然(연)'
  },
  {
    age: '42세',
    name: '培(배)'
  },
  {
    age: '43세',
    name: '錫(석)'
  },
  {
    age: '44세',
    name: '淳(순)'
  },
  {
    age: '45세',
    name: '禎(정)'
  },
  {
    age: '46세',
    name: '爀(혁)'
  },
  {
    age: '47세',
    name: '圭(규)'
  },
  {
    age: '48세',
    name: '鎔(용)'
  },
  {
    age: '49세',
    name: '淵(연)'
  },
  {
    age: '50세',
    name: '東(동)'
  },
  {
    age: '51세',
    name: '熙(희)'
  },
  {
    age: '52세',
    name: '重(중)'
  },
  {
    age: '53세',
    name: '鎬(호)'
  },
  {
    age: '54세',
    name: '泳(영)'
  },
  {
    age: '55세',
    name: '樂(락)'
  },
  {
    age: '56세',
    name: '燮(섭)'
  },
  {
    age: '57세',
    name: '載(재)'
  },
  {
    age: '58세',
    name: '鐸(탁)'
  },
  {
    age: '59세',
    name: '泰(태)'
  },
  {
    age: '60세',
    name: '權(권)'
  },
  {
    age: '61세',
    name: '燦(찬)'
  },
  {
    age: '62세',
    name: '均(균)'
  },
  {
    age: '63세',
    name: '銀(은)'
  },
  {
    age: '64세',
    name: '求(구)'
  },
  {
    age: '65세',
    name: '榮(영)'
  },
  {
    age: '66세',
    name: '烜(훤)'
  },
  {
    age: '67세',
    name: '埈(준)'
  },
  {
    age: '68세',
    name: '鍊(연)'
  },
  {
    age: '69세',
    name: '浩(호)'
  },
  {
    age: '70세',
    name: '松(송)'
  },
  {
    age: '71세',
    name: '炯(형)'
  },
  {
    age: '72세',
    name: '增(증)'
  },
  {
    age: '73세',
    name: '鈺(옥)'
  },
  {
    age: '74세',
    name: '源(원)'
  },
  {
    age: '75세',
    name: '柄(병)'
  },
  {
    age: '76세',
    name: '董(동)'
  },
  {
    age: '77세',
    name: '報(보)'
  },
  {
    age: '78세',
    name: '鏞(용)'
  },
  {
    age: '79세',
    name: '淑(숙)'
  },
  {
    age: '80세',
    name: '林(임)'
  },
  {
    age: '81세',
    name: '奐(환)'
  },
  {
    age: '82세',
    name: '埻(준)'
  },
  {
    age: '83세',
    name: '銳(예)'
  },
  {
    age: '84세',
    name: '澤(택)'
  },
  {
    age: '85세',
    name: '桁(항)'
  },
  {
    age: '86세',
    name: '燁(엽)'
  },
  {
    age: '87세',
    name: '堯(요)'
  },
  {
    age: '88세',
    name: '鎰(일)'
  },
  {
    age: '89세',
    name: '海(해)'
  },
  {
    age: '90세',
    name: '㯳(경)'
  },
  {
    age: '91세',
    name: '炫(현)'
  },
  {
    age: '92세',
    name: '哉(재)'
  },
  {
    age: '93세',
    name: '銘(명)'
  },
  {
    age: '94세',
    name: '淡(담)'
  },
  {
    age: '95세',
    name: '相(상)'
  },
  {
    age: '96세',
    name: '熒(형)'
  },
  {
    age: '97세',
    name: '垞(택)'
  },
  {
    age: '98세',
    name: '鍵(건)'
  },
  {
    age: '99세',
    name: '河(하)'
  }
]

const orderTable = nameArray => (
  <NameTable>
    {
      nameArray.map(row => (
        <NameRow>
          <NameCell>{row.age}</NameCell>
          <NameCell>{row.name}</NameCell>
        </NameRow>
      ))
    }
  </NameTable>
)

const NameorderPage = () => (
  <Layout pageTitle={'역 사'} pageSubtitle={'대동항렬표'}>
    <NameOrderWrapper>
      {orderTable(mainNameOrder.slice(0, 18))}
      {orderTable(mainNameOrder.slice(18, 36))}
      {orderTable(mainNameOrder.slice(36, 54))}
      {orderTable(mainNameOrder.slice(54, 72))}
    </NameOrderWrapper>
  </Layout>
)

export default NameorderPage
