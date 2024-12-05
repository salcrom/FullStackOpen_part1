const Header = (prop) => {
    // console.log(prop);
    return <h1>{prop.course}</h1>;
};

const Content = (props) => {
    // console.log(props);
    return (
        <div>
            <Part part={props.course[0]} />
            <Part part={props.course[1]} />
            <Part part={props.course[2]} />
        </div>
    );
};

const Part = (prop) => {
    // console.log(props);
    return (
        <p>
            {prop.part.name} {prop.part.exercises}
        </p>
    );
};

const Total = (prop) => {
    // console.log(prop);
    return (
        <p>
            Number of exercises{" "}
            {prop.course[0].exercises +
                prop.course[1].exercises +
                prop.course[2].exercises}
        </p>
    );
};

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header course={course.name} />
            <Content course={course.parts} />
            <Total course={course.parts} />
        </div>
    );
};

export default App;
