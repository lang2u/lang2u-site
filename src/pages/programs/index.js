import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isValidated: false }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    render() {
        return (
            <Layout>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: 'url(/img/pexels-shvets-production-7516363.jpg)',
                    }}
                >
                    <h2
                        className="has-text-weight-bold is-size-1"
                        style={{
                            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                            backgroundColor: '#f40',
                            color: 'white',
                            padding: '1rem',
                        }}
                    >
                        수업 소개
                    </h2>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h1>수업 소개</h1>
                            <h3>▶ 1:1 맞춤첨삭</h3>
                            <p>
                                수업 시 무조건 많이 말을 하는 것이 아니라 최대한 정확하게 말하는 것을 기본으로 합니다.
                                수업 중 수시로 첨삭해드리며 그 외에도 맞춤첨삭을 진행하여 보다 정확한 문장을 만들 수 있도록 해드립니다.
                                영어로 대화를 많이 한다면 영어가 좀 더 편해질 수는 있지만, 계속해서 같은 실수를 반복하기 때문에 실력향상을 위해선 ‘첨삭’이 가장 좋은 방법이라고 생각합니다☺
                            </p>
                            <h3>▶ 수업 외 casual talk 진행</h3>
                            <p>
                                수업 이외에도 여러 재미있는 주제들로 대화를 진행하여 영어에 대한
                                부담감을 줄여드립니다
                            </p>
                            <h3>▶ 스크린 영어 무료특강 진행</h3>
                            <img src="/img/image6.png"/>
                            <p>
                                수강생들을 대상으로 매 달 스크린영어 무료특강을 진행합니다
                            </p>
                            <h3>커리큘럼</h3>
                            <img src="/img/image7.png"/>
                            <p>
                                수업 대상과 목표를 올바르게 이해하고 수업 계획서와 커리큘럼을 세웁니다.
                                무조건적인 Input 주입 위주의 수업보다는 해당 수업의 학습자들과 분위기에 맞춰나가면서 언어학습뿐 아니라 즐거운 직. 간접적인 문화체험의 시간과 공간이 되도록 노력하고 있습니다.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
