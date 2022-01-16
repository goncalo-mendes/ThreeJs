import * as THREE from 'three'
import Experience from './Experience.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setSword()
            }
        })
    }

    // setDummy()
    // {
    //     this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding
        
    //     const cube = new THREE.Mesh(
    //         new THREE.BoxGeometry(1, 1, 1),
    //         new THREE.MeshBasicMaterial({ map: this.resources.items.lennaTexture })
    //     )
    //     this.scene.add(cube)        
    // }
    setSword(){
        this.sword = {}
        this.sword.model = this.resources.items.swordModel.scene
        console.log(this.sword.model)
        this.scene.add(this.sword.model)

        const directionalLight = new THREE.DirectionalLight('#fffff', 3)
        directionalLight.position.set(5,5,5)
        this.scene.add(directionalLight)
    }
    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}