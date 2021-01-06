
var AMGraph = {
    arcnum: 22,
    vexnum: 13,
}
var vexs=["黑龙江大学西门","主楼","体育馆","联通广场","第一图书馆","体育场","汇文楼","大学生活动中心","博物馆","地下通道","3号教学楼","4号教学楼","晨曦广场"];
var arcs = new Array();
var D = new Array();
var Path = new Array();
for (var i = 0; i < 13; i++) {
    D[i] = new Array();
    Path[i] = new Array();
    for (var j = 0; j < 13; j++) {
        D[i][j] = 0;
        Path[i][j] = 0;

    }
}
var arcs=[[0,2,10,100,100,100,100,100,15,100,100,100,100],[2,0,5,6,100,100,100,100,12,100,100,100,100],[10,5,0,12,100,100,100,100,100,100,100,100,],[100,6,12,0,3,10,100,100,9,100,100,100,100],
[100,100,100,3,0,4,100,10,100,100,100,100,100],[100,100,100,10,4,0,5,8,100,100,100,100,100],[100,100,100,100,100,5,0,6,100,8,100,100,100],[100,100,100,100,20,8,6,0,5,5,100,100,100],[15,12,100,9,100,100,100,5,0,100,100,100,100],[100,100,100,100,100,100,8,5,100,0,2,2,5],[100,100,100,100,100,100,100,100,100,2,0,100,6],[100,100,100,100,100,100,100,100,100,2,100,0,6],[100,100,100,100,100,100,100,100,100,5,6,6,0]];

var ab=new Array();
for(var i=0;i<13;i++)
  ab[i]="0";
function Floyd() {
    var i,j,k;
    for(i=0;i<AMGraph.vexnum;i++)
    for(j=0;j<AMGraph.vexnum;j++)
    {           
       D[i][j]=arcs[i][j];
       if(D[i][j]<100&&i!=j)
       Path[i][j]=i;
       else{
           Path[i][j]=-1;
       }


    }
    for(k=0;k<AMGraph.vexnum;k++)
    for(i=0;i<AMGraph.vexnum;i++)
    for(j=0;j<AMGraph.vexnum;j++)
    {

      if(D[i][k]+D[k][j]<D[i][j])
        {
              D[i][j]=D[i][k]+D[k][j];
              Path[i][j]=Path[k][j];

        }

    }


}
function Dijkstra() {
  let k, min;
  let final = [];
  for (let v = 0; v < G.numVertexes; v++) {
      final[v] = 0;
      ShortPathTable[v] = G.arc[0][v];
      Pathmatirx[v] = 0;
  }
  ShortPathTable[0] = 0;
  final[0] = 1;

  for (let v = 1; v < G.numVertexes; v++) { //初始化数据
      min = 65535;
      for (let w = 0; w < G.numVertexes; w++) { //寻找离V0最近的顶点
          if (!final[w] && ShortPathTable[w] < min) {
              k = w;
              min = ShortPathTable[w]; //w 顶点离V0顶点更近
          }
      }
      final[k] = 1; //将目前找到的最近的顶点置位1
      for (let w = 0; w < G.numVertexes; w++) { //修正当前最短路径及距离
          if (!final[w] && (min + G.arc[k][w] < ShortPathTable[w])) { //说明找到了更短的路径，修改Pathmatirx[w]和ShortPathTable[w]
              ShortPathTable[w] = min + G.arc[k][w];
              Pathmatirx[w] = k;
          }
      }
  }
}
function  Locate(n){
   for(var i=0;i<22;i++)
   if(n==vexs[i])
     return i;

}
function map(start,end){
    var liEle =document.createElement("li");
    
           var i=0;
            m = start;
            n = end;
            console.log(vexs[n]);
            ab[i]=vexs[n];
            i++;
            k = Path[m][n];
            while (k != m) {
                console.log(vexs[k]);
                ab[i]=vexs[k];
                i++;
                k = Path[m][k];
            }
            console.log(vexs[m]);
            ab[i]=vexs[m];
           show(i,m,n);
}
function show(n,s,e){
              
      for(var i=n;i>0;i--){
        var liEle =document.createElement("li");
        liEle.innerText=ab[i]+"->";
        Ol.appendChild(liEle);
      }
      var liEle =document.createElement("li");
        liEle.innerText=ab[i];
        Ol.appendChild(liEle);
        var liEle =document.createElement("li");
        liEle.innerText="————距离为"+D[s][e]+"米";
        Ol.appendChild(liEle);

}
function del(){
  var n=Ol.childNodes.length;
  for(var i=n-1;i>0;i--)
  {
    Ol.removeChild(Ol.childNodes[i])
  }

}