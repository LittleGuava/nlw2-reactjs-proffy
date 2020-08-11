import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
    <article className="teacher-item">
                  <header>
                    <img src="https://static.invenglobal.com/upload/image/2020/05/28/o1590708752701466.jpeg" alt="Guilherme Yamada"/>
                    <div>
                        <strong>Guilherme Yamada</strong>
                        <span>Motorista de caminhão Virtual</span>
                    </div>
                  </header>

                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis mauris non odio rhoncus aliquam. Pellentesque interdum maximus pretium. Quisque pharetra nisi in dui sagittis volutpat. Quisque mattis elit non mauris blandit, in pharetra lorem varius. Fusce nibh urna, pharetra nec magna et, congue consequat sem. Etiam nec finibus neque. Vestibulum pulvinar, nibh ac gravida porttitor, libero mi dictum lorem, mollis pharetra metus erat id purus. In eget leo augue. Praesent justo mi, bibendum vel purus cursus, facilisis iaculis lorem. Nulla vehicula neque non auctor hendrerit. Integer sit amet convallis arcu. Nullam pretium condimentum nisl tempor gravida. Suspendisse rhoncus quam tortor, eget vulputate dolor luctus eget.
                    <br /><br />
Aenean molestie, lacus mattis tincidunt consequat, nulla quam tincidunt dolor, rhoncus pulvinar nisl turpis ut erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec volutpat convallis venenatis. Morbi dictum massa non massa mollis mollis. Mauris hendrerit vitae nisi at pellentesque. Mauris at eros eu magna tincidunt hendrerit ac a orci. Proin a mauris euismod, cursus metus et, dignissim est. Pellentesque mollis porta quam suscipit ultrices. Nulla porttitor, ante euismod vestibulum luctus, mi ante fermentum metus, ut fringilla est leo eu nisi. Morbi nisi justo, consectetur ut purus in, efficitur pretium purus.


                  </p>

                  <footer>
                      <p>
                          Preço/hora
                          <strong>R$50,00</strong>
                      </p>
                    <button type="button">
                        <img src={whatsappIcon} alt='whatsapp' />
                        Entrar em contato

                    </button>

                  </footer>
              </article>
    )
}

export default TeacherItem;