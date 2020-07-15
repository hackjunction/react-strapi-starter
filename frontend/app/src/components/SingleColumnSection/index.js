import React from "react";
import "./style.scss";

import { connect } from "react-redux";
import { content as selectContent } from "../../redux/staticcontent/selectors";

const SingleColumnSection = ({
    title,
    subtitle,
    children,
    center = false,
    halfpage = false,
    double = false,
}) => {
    return (
        <div
            className={`SingleColumnSection ${
                halfpage ? "SingleColumnSection--half" : ""
            }`}
        >
            {title && <h3 className="SingleColumnSection--title">{title}</h3>}
            {subtitle && (
                <p className="SingleColumnSection--subtitle">{subtitle}</p>
            )}
            <div
                className={`SingleColumnSection--content ${
                    center ? "SingleColumnSection--content-center" : ""
                }`}
            >
                {children}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { titleKey, subtitleKey } = ownProps;
    const content = selectContent(state);
    return {
        title: content[titleKey] || ownProps.title,
        subtitle: content[subtitleKey] || ownProps.subtitle,
    };
};

export default connect(mapStateToProps)(SingleColumnSection);
