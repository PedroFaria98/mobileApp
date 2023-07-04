import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../Components/Header';
import Balance from '../../Components/Header/Balance';
import Movements from '../../Components/Movements';
import Actions from '../../Components/Actions';

const list = [
  {
    id: 1,
    label: 'Conta de luz',
    value: '250,00',
    date: '25/09/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Vencimento',
    value: '1200,00',
    date: '02/09/2023',
    type: 1 //entrada
  },
  {
    id: 3,
    label: 'Patrocínio',
    value: '550,00',
    date: '08/09/2023',
    type: 1 //entrada
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Pedro Faria' />
      <Balance saldo="9.250,90" gastos="-750,00" />

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={(item)=> String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Movements data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin:14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
