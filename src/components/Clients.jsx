import { clients } from "../constants"
import styles from "../style"

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap justify-center w-full max-w-5xl`}>
      {clients.map((client) => (
        <div key={client.id} className={`w-1/3 md:w-1/4 lg:w-1/6 p-4`}>
          <img src={client.logo} alt="client" className="w-full h-auto object-contain max-h-12"/>
        </div>
      ))}
    </div>
  </section>
)

export default Clients
