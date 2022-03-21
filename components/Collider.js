//Registering Component collider
AFRAME.registerComponent("flying-birds", {
    int:function(){
        for(var i=1;i<=20;i++){
            var id=`hurdle${i}`;

            //Positioning the variables
            var posX=Math.floor(Math.random()*3000+ -1000)
            var posY=Math.floor(Math.random()*2+ -1)
            var posZ=Math.floor(Math.random()*3000+ -1000)

            var position={x:posX,y:posY,z:posZ}

            //Call the Function
            this.flyingBirds(id,rotation)
        }
    },

    flyingBirds:(id,position)=>{
        //Get terrain elements
        var terrainE1=document.querySelector("#terrain")
        
        //Create bird model entity
        var birdE1=document.createElement("a-entity")
        
        //Setting multiple attributes
        birdE1.setAttribute("id",id)

        birdE1.setAttribute("position",position)
        birdE1.setAttribute("scale",{x:500,y:500,z:500})

        birdE1.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")

        //Animated Models
        birdE1.setAttribute("animation-mixer",{})

        //Append bird entity as the child
        terrainE1.appendChild(birdE1)
    }
})