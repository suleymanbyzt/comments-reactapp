import React from 'react';
import Card from './Card';
import Comment from './Comment';

export const App = () => {
  return (
    <div className="ui comments" style={{
      paddingTop: '10px',
      paddingLeft: '15px'
    }} >

      <Card>
        <Comment name="Süleyman Bayazit" date="2 Years Ago" star="5" comment="should i learn react?" />
      </Card>

      <Card>
        <Comment name="Ahmet Yıldız" date="5 Days Ago" star="2" comment="yes you should learn bro" />
      </Card>
    </div>

  )
}
export default App;