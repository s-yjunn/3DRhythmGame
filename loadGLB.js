/**
 * This file contain a method that import all glb models into the canvas.
 */

function loadGLB(){
  var loader = new THREE.GLTFLoader();
  // Load a glTF resource
        loader.load(
            // here is the resource URL.  CHANGE THIS TO YOUR FILE NAME
            'GLBs/head.glb',
            // this model is from https://sketchfab.com/3d-models/cartoon-lowpoly-small-city-free-pack-edd1c604e1e045a0a2a552ddd9a293e6

            // function below is called when the resource is loaded
            function ( gltf ) {
                // Make sure everything in this glb model should cast shadow
                gltf.scene.traverse( function( node ) {
                  if ( node.isMesh ) { node.castShadow = true; }
                } );
                head = gltf.scene;  // search through the loaded file for the object we want
                character.add(head);
            },
            
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },

            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );

    loader.load('GLBs/body.glb',
            // function below is called when the resource is loaded
            function ( gltf ) {
                gltf.scene.traverse( function( node ) {
                  if ( node.isMesh ) { node.castShadow = true; }
                } );
                body = gltf.scene; 
                character.add( body );
            },
            
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },

            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );

    loader.load('GLBs/hand.glb',
            // function below is called when the resource is loaded
            function ( gltf ) {
                gltf.scene.traverse( function( node ) {
                  if ( node.isMesh ) { node.castShadow = true; }
                } );
                leftHand = gltf.scene; 
                character.add( leftHand );
                //render();
                //requestAnimationFrame( render );  // we don't want to start rendering until the model is loaded
            },
            
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },

            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );
    
    loader.load('GLBs/hand2.glb',
            // function below is called when the resource is loaded
            function ( gltf ) {
                gltf.scene.traverse( function( node ) {
                  if ( node.isMesh ) { node.castShadow = true; }
                } );
                rightHand = gltf.scene; 
                character.add( rightHand );
                //render();
                //requestAnimationFrame( render );  // we don't want to start rendering until the model is loaded
            },
            
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },

            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );
    
    loader.load('GLBs/leg.glb',
            // function below is called when the resource is loaded
            function ( gltf ) {
                gltf.scene.traverse( function( node ) {
                  if ( node.isMesh ) { node.castShadow = true; }
                } );
                leftLeg = gltf.scene; 

                // box the leg so that it would rotate round it's own center instead of the world's center.
                var box = new THREE.Box3().setFromObject( leftLeg );
                box.center( leftLeg.position ); // this re-sets the mesh position
                leftLeg.position.multiplyScalar( - 1 );
                leftLegPivot = new THREE.Object3D();
                leftLegPivot.add( leftLeg );
                leftLegPivot.position.set(-0.4, 0.7, 0);
                character.add( leftLegPivot );
            },
            
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },

            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );

    loader.load('GLBs/leg2.glb',
            // function below is called when the resource is loaded
            function ( gltf ) {
                gltf.scene.traverse( function( node ) {
                  if ( node.isMesh ) { node.castShadow = true; }
                } );
                rightLeg = gltf.scene; 
                var box = new THREE.Box3().setFromObject( rightLeg );
                box.center( rightLeg.position ); // this re-sets the mesh position
                rightLeg.position.multiplyScalar( - 1 );
                rightLegPivot = new THREE.Object3D();
                rightLegPivot.add( rightLeg );
                rightLegPivot.position.set(0.4, 0.7, 0);
                character.add( rightLegPivot );
            },
            
            // called while loading is progressing
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },

            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' );
            }
        );
}