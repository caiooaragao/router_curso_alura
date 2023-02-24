import cardapio from 'data/cardapio.json'
import styles from './Inicio.module.scss'

export default function inicio(){
    let pratosRecomendados =[...cardapio]
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
    return(
        <section>
            <h3 className={styles.titulo}>
                recomendações de cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (<div key={item.id} className={styles.recomendado}>

                </div>))}
            </div>
        </section>
    )
}

