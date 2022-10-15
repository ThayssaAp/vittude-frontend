import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-resp">
                <p>Responsável Técnico</p>
                <h3>Fabio Camilo da Silva</h3>
                <h3>CRP<code>(06/84133)</code></h3>
            </div>
            <div className="footer-att">
                <img src="https://www.vittude.com/static/images/alerta-blank.svg" alt="mão"></img>
                <p>Atenção: Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para <strong>188 (CVV)</strong> ou acesse o site <a href="www.cvv.org.br">www.cvv.org.br</a>. Em caso de emergência, procure atendimento em um hospital mais próximo.</p>
            </div>
        </footer>
    )
};

export default Footer;