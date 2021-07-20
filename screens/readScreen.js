import React from 'react'
import { View, Text, SearchBar, FlatList } from 'react-native'
import db from '../config'

export default class ReadScreen extends React.Component{
    constructor() {
        super()
        this.state={
            search:'',
            allStories:[],
        }
    }
    updateSearch=()=> {
        this.setState({search:this.state.search})
    }
    retriveStories=()=> {
        try{
            var allStories=[];
            var stories=db.collection("stories")
            .get().then((snapshot)=>{
                snapshot.forEach((doc)=>{
                    allStories.push(doc.data())
                })
                this.setState({
                    allStories
                })
            })
        }
        catch(error){
            console.log(error)
        }
    }
    componentDidMount() {
        this.retriveStories()
    }
    render () {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <SearchBar placeholder="Type The Title Of Your Story" onChangeText={this.updateSearch} value={this.state.search}> </SearchBar>
                <FlatList data={this.state.allStories} renderItem={({item})=>(
                    <View style={{height:80,width:'100%',borderWidth:2,borderColor:'blue',justifyContent:'center',alignSelf:'center'}}>
                        <Text>title:{item.title}</Text>
                        <Text>author:{item.author}</Text>
                    </View>
                )} keyExtractor={(item, index)=>index.toString()}
                ></FlatList>
            </View>
            
        )
    }
}